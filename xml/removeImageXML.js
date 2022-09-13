const data = (address) => {
  return `
   <?xml version="1.0" encoding="UTF-8"?>
   <methodCall>
      <methodName>grav.removeImage</methodName>
      <params>
         <param>
            <value>
               <struct>
                  <member>
                     <name>addresses</name>
                     <value>
                        <array>
                           <data>
                              <value>
                                 <string>${address}</string>
                              </value>
                           </data>
                        </array>
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
   </methodCall>
   `;
};

module.exports = data;
