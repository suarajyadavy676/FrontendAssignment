import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react";

function Course() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Add Course</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Course Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <input type="text" placeholder="Enter Name" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Submit
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Course;
