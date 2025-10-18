import ImageKit from "imagekit";

export const imagekit = new ImageKit({
  publicKey: "public_yagReLPybaD+x7/pa1+7BCrdOSA=",
  privateKey: "private_rjH2e15+thjOfP+kfMQkFYwPwSc=",
  urlEndpoint: "https://ik.imagekit.io/t7aggkv2v",
});


const uploadFile = async(File,filename)=>{
  const result = await imagekit.upload({
      file: File,   // use buffer instead of fs
      fileName: filename, 

    });
    return result;
}

export{
  uploadFile
}