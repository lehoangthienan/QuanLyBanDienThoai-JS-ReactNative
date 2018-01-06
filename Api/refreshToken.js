import saveToken from './saveToken';
const refreshToken=(token)=>{
    fetch('https://funnyshopjonah.000webhostapp.com/refresh_token.php',
    {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        body: JSON.stringify({token})
        })
.then(res=>res.text())
.then(tokenToSave=>saveToken(tokenTosave))
};
export default refreshToken;