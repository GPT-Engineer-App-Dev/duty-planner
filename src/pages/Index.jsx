import { useState } from "react";
import { Container, VStack, Input, HStack, List, ListItem, IconButton, Text } from "@chakra-ui/react";
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";

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

  const [editIndex, setEditIndex] = useState(-1);
  const [editInput, setEditInput] = useState("");

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditInput(todos[index]);
  };

  const handleUpdateTodo = (index, value) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = value;
    setTodos(updatedTodos);
    setEditIndex(-1);
    setEditInput("");
  };

  const handleEditInputChange = (event) => {
    setEditInput(event.target.value);
  };

  const handleEditKeyPress = (event, index) => {
    if (event.key === "Enter") {
      handleUpdateTodo(index, editInput);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="3xl" mb={4} fontWeight="bold">
          Todo List
        </Text>
        <HStack>
          <Input placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleAddTodo();
            }
          }} boxShadow="sm" borderRadius="md" />
          <IconButton aria-label="Add todo" icon={<FaPlus />} onClick={handleAddTodo} boxShadow="sm" borderRadius="md" />
        </HStack>
        <List spacing={3} width="100%">
          {todos.map((todo, index) => {
            if (index === editIndex) {
              return (
                <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center" _hover={{ bg: "gray.100" }} p={2} borderRadius="md">
                  <Input value={editInput} onChange={handleEditInputChange} onKeyPress={(event) => handleEditKeyPress(event, index)} autoFocus />
                  <IconButton aria-label="Update todo" icon={<FaPlus />} onClick={() => handleUpdateTodo(index, editInput)} />
                </ListItem>
              );
            }
            return (
              <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center" _hover={{ bg: "gray.100" }} p={2} borderRadius="md">
                <Text>{todo}</Text>
                <HStack>
                  <IconButton aria-label="Edit todo" icon={<FaEdit />} onClick={() => handleEditTodo(index)} />
                  <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} />
                </HStack>
              </ListItem>
            );
          })}
        </List>
      </VStack>
      <Text as="footer" color="gray.600" width="full" textAlign="center" mt={10}>
        © 2024 Todo App. All rights reserved.
      </Text>
    </Container>
  );
};

export default Index;
