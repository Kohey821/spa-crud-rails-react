import {
  Flex,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';

function ColorModeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center">
      <MoonIcon />
      <Switch
        mx="1"
        onChange={toggleColorMode}
        isChecked={colorMode === 'light'}
      />
      <SunIcon />
    </Flex>
  );
}

export default ColorModeToggler;
