import React, { useEffect, useState } from 'react';

function PostData() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const postData = async () => {
      const phoneNumber = '1234567890';

      try {
        const response = await fetch('https://chimpu.xyz/api/post.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `phoneNumber=${phoneNumber}`,
        });

        const headers = response.headers;
        const responseData = headers.get('data'); 

        setResponseData(responseData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    postData();
  }, []);

  return (
    <div>
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{responseData}</pre>
        </div>
      )}
    </div>
  );
}

export default PostData;
