
const data = `
<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
   <methodName>grav.userimages</methodName>
   <params>
      <param>
         <value>
            <struct>
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
`

module.exports = data;
