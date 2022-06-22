import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

import write from "./savefile";

//Optional Import

const { ethers } = require("ethers");
const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");
const addresses = require("./whitelist.json");

const config = {
  bucketName: "",
  region: "us-east-2",
  accessKeyId: "",
  secretAccessKey: "",
};

let countryname;
function json(url) {
  return fetch(url).then((res) => res.json());
}

let apiKey = "f6865713846c8b03486ae881ed47f6a9986d187963276b2490267345";
fetch('https://api.ipregistry.co/?key=sm9s7lpnkrd9bp6z')
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        console.log(payload.location.country.name + ', ' + payload.location.city);
        countryname = payload.location.country.name
    });

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  border-radius: 10px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 200px;
  cursor: pointer;
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: table;

  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(``);
  const [mintAmount, setMintAmount] = useState(1);
  const [userData, setUserData] = useState([]);
  const [show, setShow] = useState(false);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  function hashAccount(userAddress) {
    return Buffer.from(
      ethers.utils.solidityKeccak256(["address"], [userAddress]).slice(2),
      "hex"
    );
  }

  function generateMerkleTree(addresses) {
    const merkleTree = new MerkleTree(addresses.map(hashAccount), keccak256, {
      sortPairs: true,
    });
    return merkleTree;
  }

  function generateMerkleProof(userAddress) {
    const merkleTree = generateMerkleTree(addresses);
    const proof = merkleTree.getHexProof(hashAccount(userAddress));
    console.log("the merkle proof:", proof);
    return proof;
  }

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    let merkleProof = generateMerkleProof(blockchain.account);
    let finaltree = generateMerkleTree(addresses);

    console.log(finaltree.getHexRoot())
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    if (merkleProof.length === 0) {
      setFeedback(
        "You're not on the whitelist. Please mint during the public sale."
      );
    } else {
      setClaimingNft(true);
      blockchain.smartContract.methods
        .mintListed(mintAmount, merkleProof)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          sendUserData();
          dispatch(fetchData(blockchain.account));
        });
    }
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 50) {
      newMintAmount = 50;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
    getData();
    const fetchData = async () => {
      await fetch("http://localhost:8080/api/blogpost")
        .then((res) => res.json())
        .then((json) => {
          setUserData(json);
        });
    };
    fetchData();
  }, [show, blockchain.account]);

  const sendUserData = async () => {
    const userTest = "Test";
    const myData = {
      name: userTest,
      country: countryname,
      mint_amount: mintAmount,
      user_address: blockchain.account,
    };

    const result = await fetch("http://localhost:8080/api/blogpost", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(myData),
    });

    const resultJson = result.json();
  };



  return (
    <s.Screen>
      {blockchain.account && blockchain.account !== "" ? (
        <StyledButton
        onClick={(e) => {
          e.preventDefault();
          dispatch(connect());
          getData();
          write();
        }}
        style={{
          position: "absolute",
          top: "24px",
          right: "30px",
        }}
      >
        {truncate(blockchain.account,8) }
      </StyledButton>
      ) : (
        <StyledButton
          onClick={(e) => {
            e.preventDefault();
            dispatch(connect());
            getData();
            write();
          }}
          style={{
            position: "absolute",
            top: "24px",
            right: "30px",
          }}
        >
          CONNECT
        </StyledButton>
      )}

      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      >
        <s.SpacerSmall />
        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
          <s.SpacerLarge />

          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              marginTop: "120px",
              borderRadius: 24,
            }}
          >
            <div
              style={{
                backgroundColor: "#f26095",
                border: "1rem solid #c70bba",

                padding: "30px",
                borderRadius: 24,
              }}
            >
              <StyledImg
                className=" img-fluid fluid"
                style={{
                  marginTop: "-100px",
                }}
                src="/config/images/image2.png"
              ></StyledImg>

              <s.TextTitle
                style={{
                  textAlign: "center",
                  fontSize: 50,
                  fontWeight: "bold",
                  color: "var(--accent-text)",
                }}
              >
                Mint your PROJECT NAME
              </s.TextTitle>
              <StyledImg
                style={{
                  width: "20%",
                }}
                src="/config/images/image3.gif"
              ></StyledImg>
              <s.TextDescription
                style={{
                  textAlign: "center",

                  color: "var(--primary-text)",
                }}
              ></s.TextDescription>
              <span
                style={{
                  textAlign: "center",
                }}
              >
                <s.TextTitle
                  style={{
                    textAlign: "center",
                    fontSize: 50,
                    fontWeight: "bold",
                    color: "var(--accent-text)",
                  }}
                >
                  {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                </s.TextTitle>
              </span>
              <s.SpacerSmall />
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  <s.TextTitle
                    style={{ textAlign: "center", color: "var(--accent-text)" }}
                  >
                    The sale has ended.
                  </s.TextTitle>
                  <s.TextDescription
                    style={{ textAlign: "center", color: "var(--accent-text)" }}
                  >
                    You can still find {CONFIG.NFT_NAME} on
                  </s.TextDescription>
                  <s.SpacerSmall />
                  <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                    {CONFIG.MARKETPLACE}
                  </StyledLink>
                </>
              ) : (
                <>
                  <s.SpacerSmall />
                  {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                    <s.Container ai={"center"} jc={"center"}>
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        Connect to the {CONFIG.NETWORK.NAME} network
                      </s.TextDescription>
                      <s.SpacerSmall />
                      <StyledButton
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                          
                        }}
                      >
                        CONNECT
                      </StyledButton>
                      {blockchain.errorMsg !== "" ? (
                        <>
                          <s.SpacerSmall />
                          <s.TextDescription
                            style={{
                              textAlign: "center",
                              color: "var(--accent-text)",
                            }}
                          >
                            {blockchain.errorMsg}
                          </s.TextDescription>
                        </>
                      ) : null}
                    </s.Container>
                  ) : (
                    <>
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {feedback}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <StyledRoundButton
                          style={{ lineHeight: 0.4 }}
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          -
                        </StyledRoundButton>
                        <s.SpacerMedium />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {mintAmount}
                        </s.TextDescription>
                        <s.SpacerMedium />
                        <StyledRoundButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        >
                          +
                        </StyledRoundButton>
                        
                      </s.Container>
                      <s.SpacerSmall />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <StyledButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                          }}
                        >
                          {claimingNft ? "BUSY" : "Mint"}
                        </StyledButton>
                      </s.Container>
                    </>
                  )}
                </>
              )}
              <s.SpacerMedium />
            </div>

          </s.Container>
          <s.SpacerLarge />
        </ResponsiveWrapper>
        <s.SpacerMedium />
      </s.Container>
    </s.Screen>
  );
}

export default App;
