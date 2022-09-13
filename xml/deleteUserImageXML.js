const data =  (img) => 
`<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
   <methodName>grav.deleteUserimage</methodName>
   <params>
      <param>
         <value>
            <struct>
               <member>
                  <name>userimage</name>
                  <value>
                     <string>${img}</string>
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
