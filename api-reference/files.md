**Get list of users files**
----
List of current users files (only owned by the user) in JSON format.

* **URL**

  /files

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
         "name":"File.scpl",
         "size":"8 KB",
         "timestamp":"2019-04-09 15:05:32",
         "relativeTimestamp":"Today at 3:05 pm",
         "updated":null,
         "relativeUpdated":null
        },
        {
         "id":"2ruc944hfkgutiy930du",
         "type":"folder",
         "name":"Folder",
         "size":"0 bytes",
         "contents":[ ],
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
         url: "https://account.scpl.dev/api/v1/files",
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
