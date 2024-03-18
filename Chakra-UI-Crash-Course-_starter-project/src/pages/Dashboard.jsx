import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  // style props
  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    mt: "10px",
    textAlign: "center",
    color: "white",
  };

  return (
    <Container>
      <Heading my="30px">Chakra UI Dashboard</Heading>
      <Text ml="20px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione
        ducimus quae, vel error temporibus dolore ipsa voluptas natus
        exercitationem sit accusantium provident qui maiores tenetur quod,
        officiis beatae delectus?
      </Text>

      <Box color="white" backgroundColor={"black"} p="20px" mt="30px">
        <Text>This is a box</Text>
      </Box>

      <Box sx={boxStyles}>
        <Text>Hello Flowers</Text>
      </Box>
    </Container>
  );
}
