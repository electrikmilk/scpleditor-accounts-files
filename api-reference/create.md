**Create File or Folder**
----
Creates a physical file or folder in the users folder and a database record for that file or folder. 'contents' is optional for files and will be ignored if you are creating a folder.

* **URL**

  /create

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `token=[alphanumeric]`
   `type=[file|folder]`
   `name=[string]`

   **Optional:**

   `contents=[scpl]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._>

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._>
