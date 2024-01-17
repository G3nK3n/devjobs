import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={() => toggleColorMode()}
      m="1rem"
    >
      {colorMode === "dark" ? (
        <p>Sun</p>
      ) : (
        <p>Moon</p>
      )}
    </Button>
  );
};

export default ToggleColorMode;