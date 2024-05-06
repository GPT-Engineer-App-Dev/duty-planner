import { useState } from "react";
import { Container, VStack, Input, HStack, List, ListItem, IconButton, Text } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="3xl" mb={4} fontWeight="bold">
          Todo List
        </Text>
        <HStack>
          <Input placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} boxShadow="sm" borderRadius="md" />
          <IconButton aria-label="Add todo" icon={<FaPlus />} onClick={handleAddTodo} boxShadow="sm" borderRadius="md" />
        </HStack>
        <List spacing={3} width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center" _hover={{ bg: "gray.100" }} p={2} borderRadius="md">
              <Text>{todo}</Text>
              <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
      <Text as="footer" color="gray.600" width="full" textAlign="center" mt={10}>
        © 2024 Todo App. All rights reserved.
      </Text>
    </Container>
  );
};

export default Index;
