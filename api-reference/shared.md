**Get list of files shared with user**
----
Returns a JSON formatted list of files shared with the user. Currently only files may be shared until folder sharing is implemented. Current user has read/write access to returned files. However, current user may not delete, rename, copy, move or change access to any files shared with them.

* **URL**

  /shared

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`

* **Success Response:**

     * **Code:** 200 <br />
       **Content:**<br/>
       ```json
       [{
         "id":"n402n4uc84i20ehf73j8",
         "type":"file",
         "name":"Shared File.scpl",
         "size":"8 KB",
         "owner":"2543",
         "timestamp":"2019-04-09 15:05:32",
         "relativeTimestamp":"Today at 3:05 pm",
         "updated":null,
         "relativeUpdated":null
        }]
        ```
* **Error Response:**

   * **Code:** 401 UNAUTHORIZED <br />
     **Content:**<br/>
     `{ "status":"error", "message":"No authentication token was received." }`<br/>
     `{ "status":"error", "message":"Invalid authentication token." }`

     OR

   * **Code:** 503 SERVICE_UNAVAILABLE <br />
       **Content:** `{ "status":"error", "message":"Permission errors, invalid file ID" }`

   * **Sample Call:**

   ```javascript
       $.ajax({
         url: "https://account.scpl.dev/api/v1/shared",
         dataType: "json",
         type: "POST",
         date: {
            token: "AUTH_TOKEN"
         },
         success : function(r) {
           console.log(r);
         }
       });
     ```

   * **Notes:**

     _No notes._
