<h1>Files REST API Reference</h1>
<code><p><span style="color: #888;">https://</span>account.scpl.dev<span style="color: #555;">/api/v1/</span><b>{endpoint}</b></p></code>
<hr/>
<br/><p>JSON success/error reponse format:</p>
<code>{"status":"error|success","message":"details of error or success"}</code>
<br/><br/><hr/>

<div class="endpoint-item">
<div class="endpoint"><span>/</span>access</div>
<div class="endpoint-description">Endpoint is restricted to the owner of the file. Currently only files may be shared until folder sharing is implemented. This will give the selected collaborators read/write access.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>users=[comma,list,of,user,ids]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>Success or error message</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
  <div class="endpoint"><span>/</span>copy</div>
  <div class="endpoint-description">Endpoint is restricted to the owner of the file. Copy a file or folder set by 'item_id' to a folder set by 'folder_id'. Item ID can be the ID of a folder. If no folder ID is given, the file or folder is copied to the root of their files.</div>
  <div class="endpoint-method">Method: <span>POST</span></div>
  <div class="endpoint-params">
    <h4>URL Params</h4>
    <ul>
      <li>token=[alphanumeric]</li><br/>
      <li>item_id=[alphanumeric]</li><br/>
      <li>folder_id=[alphanumeric] (optional, if null set to root)</li>
    </ul>
  </div>
  <div class="endpoint-params">
    <h4>Response</h4>
    <ul>
      <li>Success or error message</li>
    </ul>
  </div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>create</div>
<div class="endpoint-description">Creates a physical file or folder in the users folder and a database record for that file or folder. Set type as file or folder. Contents is optional for files and will be ignored if you are creating a folder.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>type=[file|folder]</li><br/>
    <li>name=[filename]</li><br/>
    <li>contents=[scpl] (optional)</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>id=[alphanumeric] (20 characters)</li><br/>
    <li>name=[filename] (special characters removed)</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>delete</div>
<div class="endpoint-description">Endpoint is restricted to the owner of the file. Delete a file specified by 'id', set type as file or folder.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>type=[file|folder]</li><br/>
    <li>id=[alphanumeric]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>Success or error message</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>file</div>
<div class="endpoint-description">Get the contents of a file specified by 'id'. Endpoint is restricted to the owner of the file or a set collaborator.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>id=[alphanumeric]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>contents=[scpl]</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>files</div>
<div class="endpoint-description">List of current users files (only owned by the user) in JSON format.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li>
  </ul>
  <h4>Example Response</h4>
  <ul>
    <li>[{<br/>"id":"n402n4uc84i20ehf73j8",<br/>"type":"file",<br/>"name":"File.scpl",<br/>"size":"8 KB",<br/>"timestamp":"2019-04-09 15:05:32",<br/>"relativeTimestamp":"Today at 3:05 pm",<br/>"updated":null,<br/>"relativeUpdated":null<br/>},<br/>
      {<br/>"id":"2ruc944hfkgutiy930du",<br/>"type":"folder",<br/>"name":"Folder",<br/>"size":"0 bytes",<br/>"contents":[...],<br/>"timestamp":"2019-04-09 15:05:32",<br/>"relativeTimestamp":"Today at 3:05 pm",<br/>"updated":null,<br/>"relativeUpdated":null<br/>}]</li>
  </ul>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>fork</div>
<div class="endpoint-description">Endpoint is restricted to file collaborators, owner uses <code>/copy</code>. Fork a file shared with the current user, file is specified by 'id'. File is copied from owners user folder to the root of the current users folder.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>id=[alphanumeric]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>Success or error message</li>
  </ul>
</div>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>move</div>
<div class="endpoint-description">Endpoint is restricted to the owner of the file or folder. Move a file or folder specified by 'item_id' to a folder set by 'folder_id'. Item ID can be the ID of a folder or file. If no folder ID is given, the file or folder is moved to the root of the current users files.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>item_id=[alphanumeric]</li><br/>
    <li>folder_id=[alphanumeric] (optional, if null set to root)</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>Success or error message</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>rename</div>
<div class="endpoint-description">Endpoint is restricted to the owner of the file or folder. Rename a file or folder specified by 'id'. 'name' is the new name of the file or folder.</div>
<div class="endpoint-method">Method: <span>POST</span></div>
<div class="endpoint-params">
  <h4>URL Params</h4>
  <ul>
    <li>token=[alphanumeric]</li><br/>
    <li>id=[alphanumeric]</li><br/>
    <li>name=[new-name]</li>
  </ul>
</div>
<div class="endpoint-params">
  <h4>Response</h4>
  <ul>
    <li>name=[new-name] (special characters removed)</li>
  </ul>
</div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>save</div>
<div class="endpoint-description">Save new contents for a file specified by 'id'. Endpoint is restricted to the owner of the file or a set collaborator.</div>
  <div class="endpoint-method">Method: <span>POST</span></div>
  <div class="endpoint-params">
    <h4>URL Params</h4>
    <ul>
      <li>token=[alphanumeric]</li><br/>
      <li>id=[alphanumeric]</li><br/>
      <li>contents=[scpl]</li>
    </ul>
  </div>
  <div class="endpoint-params">
    <h4>Response</h4>
    <ul>
      <li>Success or error message</li>
    </ul>
  </div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>shared</div>
<div class="endpoint-description">Returns a JSON formatted list of files shared with the user. Currently only files may be shared until folder sharing is implemented. Current user has read/write access to returned files. However, current user may not delete, rename, copy, move or change access to any files shared with them.</div>
  <div class="endpoint-method">Method: <span>POST</span></div>
  <div class="endpoint-params">
    <h4>URL Params</h4>
    <ul>
      <li>token=[alphanumeric]</li>
    </ul>
    <h4>Response</h4>
    <ul>
      <li>List of files shared with the current user in JSON format.</li>
    </ul>
    <h4>Example Response</h4>
    <ul>
      <li>[{<br/>"id":"n402n4uc84i20ehf73j8",<br/>"type":"file",<br/>"name":"Shared File.scpl",<br/>"size":"8 KB",<br/>"timestamp":"2019-04-09 15:05:32",<br/>"relativeTimestamp":"Today at 3:05 pm",<br/>"updated":null,<br/>"relativeUpdated":null<br/>}]</li>
    </ul>
  </div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>token</div>
<div class="endpoint-description">Send 'key' supplied by '?login_key=' from the accounts backend. Will return the actual token created when the user logged in or signed up that can be used to make requests to the REST API.</div>
  <div class="endpoint-method">Method: <span>POST</span></div>
  <div class="endpoint-params">
    <h4>URL Params</h4>
    <ul>
      <li>key=[integer]</li>
    </ul>
  </div>
  <div class="endpoint-params">
    <h4>Response</h4>
    <ul>
      <li>token=[alphanumeric] (10 characters)</li>
    </ul>
  </div>
</div>
<div class="endpoint-item">
<div class="endpoint"><span>/</span>users</div>
<div class="endpoint-description">Search users by username. Includes user ID for sending to the 'access' endpoint for the owner of a file to add other users as collaborators.</div>
  <div class="endpoint-method">Method: <span>POST</span></div>
  <div class="endpoint-params">
    <h4>URL Params</h4>
    <ul>
      <li>token=[alphanumeric]</li><br/>
      <li>query=[search-query] (required)</li>
    </ul>
    <h4>Response</h4>
    <ul>
      <li>List of all users in JSON format.</li>
    </ul>
    <h4>Example Response</h4>
    <ul>
      <li>[{<br/>"id":"1050",<br/>"username":"ScPLUser"<br/>}]</li>
    </ul>
  </div>

</div>
