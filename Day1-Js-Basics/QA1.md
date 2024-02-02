Write a blog on Difference between HTTP1.1 vs HTTP2

HTTP1.1:-
       -> It tansfer all the request & response in plain text form.

       -> It head of line blocking in which tcp connection is blocked all other request until the response doesn't receive.

       -> It compresses data by itself.

       -> It uses requests resource Inlining for use getting multiple pages.


HTTP2.0
       -> It works on the binary language.it converts all the textual messages in binary format.

       -> It works on fully multiplexed that is one TCP connection is used for multiple request.
       
       -> It uses HPACK to split the data from header.It compresses the header.

       -> It uses PUSH frame by server that collects all multiple pages .
        
