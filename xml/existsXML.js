const data = `
<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
   <methodName>grav.exists</methodName>
   <params>
      <param>
         <value>
            <struct>
               <member>
                  <name>hashes</name>
                  <value>
                     <array>
                        <data>
                           <value>
                              <string>${process.env.GRAVATAR_HASH_EMAIL}</string>
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
</methodCall>`

module.exports = data;
