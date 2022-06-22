import S3FileUpload from 'react-s3';
import reactS3, {
    uploadFile
} from 'react-s3';



function write() {
    uploadFile("main.json", config).then((data) => {
        console.log(data)
    }).catch((err) => console.log(err))

}


export default write