"use client";

import Modal from "../products/components/Modal";
import TestCarousel from "../test/TestCarousel";
import { product } from "../test/mockProduct";

const TestModal = () => {
  return (
    <Modal open={true}>
      <TestCarousel images={product.images} onClose={() => {}} />
    </Modal>
  );
};
export default TestModal;
