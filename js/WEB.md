# WEB PERFORMANCE 

Main things to look into while improving the web performance are
- Reducing overall load time
- Load critical components first and do lazy load the rest 
- Smoothness in interactivity ( loading indicator etc )
- Performance optimization tools to meassure 

## Browser Tool
- LightHouse 
- Network Monitor 
- Performance Monitor 

## Third Party Tools
- Pagespeed insights ( similar to lighthouse but runs on google server )

## Performance Meassurments 
- First Paint ( time taken for browser to paint something on browser )
- Largest contentful paint (like fonts, header, color etc)
- First meaningful paint ( user can read or understand by looking at the browser )
- Time to interactive ( time taken to complete painting so user can interact )

## Performane Basics
- First : Browser -> ISP (google.com) -> DNS (gives ip) -> ISP (128.1.23.00)
- Second: Browser --- talks to (128.1.23.00) --> Server ( does handshake and establishes the connection )
