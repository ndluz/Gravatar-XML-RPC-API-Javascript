
const data = (base64Image) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <methodCall>
   <methodName>grav.saveData</methodName>
   <params>
      <param>
         <value>
            <struct>
               <member>
                  <name>data</name>
                  <value>
                     <string>
                       ${base64Image}
                     </string>
                  </value>
               </member>
               <member>
                  <name>rating</name>
                  <value>
                     <int>0</int>
                  </value>
               </member>
               <member>
                  <name>password</name>
                  <value>
                     <string>${process.env.GRAVATAR_PASSWORD}</string>
                  </value>
               </member>
            </struct>
         </value>
      </param>
   </params>
  </methodCall>`;
}



module.exports = data;
