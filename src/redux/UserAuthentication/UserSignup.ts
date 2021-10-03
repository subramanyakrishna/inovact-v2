import userPool from "./UserPool";

const userSignup = (email :any, password: any) => {
    const attributeList : any= [];
    userPool.signUp(email, password, attributeList, [] , (err: any, data: any) => {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        console.log(data);
      });
  };
  export default userSignup;