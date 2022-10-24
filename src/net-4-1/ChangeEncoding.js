import React, {useState} from 'react';

export const ChangeEncoding = () =>  {

  const [hex, setHex] = useState('#CCCCCC');

  function hexToRGB(hex) {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (hex.length === 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];

      // 6 digits
    } else if (hex.length === 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }
    return "rgb("+ +r + "," + +g + "," + +b + ")";
  }

  let a = '';
  const handler = (e) => {
    setHex(hex => hex = e.target.value);
  }

  const bcg = {
    backgroundColor: `${hex}`,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
      <div style={bcg}>
        <input type="text" value={hex} onChange={handler}/>
        <input type="text" value={hexToRGB(hex)}/>
      </div>
  )
}
