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

  const result  = hexToRGB(hex);

  return (
      <div style={bcg}>
        <input type="text" value={hex} id="1" onChange={handler} pattern="/#[a-f0-9]{6}/gi"/>
        {
           result.includes('NaN') || result.includes('rgb(0,0,0)') ? <input type="text" value="Неверный формат"/>  :  <input type="text" value={hexToRGB(hex)}/>
        }
      </div>
  )
}
