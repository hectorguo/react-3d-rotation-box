# react-3d-rotation-box

A lightweight react component to enable 3d effect rotation for images, logos or other content.

Demo is here:
[![Demo is here](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/wo32wnq4w5)


## Usage

```
npm install -S react-3d-rotation-box
```

```jsx
import RotationBox from "react-3d-rotation-box";

<RotationBox>
    {/* any content you want to make 3d rotation effect */}
    <img
        src="https://reactjs.org/logo-og.png"
        style={{ width: "100%" }}
    />
</RotationBox>
```

You can also customize the depth of 3d rotation by modifying these attributes below:

```jsx
<RotationBox
    minWidth="800px"
    minHeight="400px"
    perspective="300px"
    rotateForce={10}
>
    {/* any content you want to make 3d rotation effect */}
    <img
        src="https://reactjs.org/logo-og.png"
        style={{ width: "100%" }}
    />
</RotationBox>
```

    