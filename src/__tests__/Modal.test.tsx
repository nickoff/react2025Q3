import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Modal } from '../components/ui/Modal';

describe('Modal component', () => {
  it('render children components', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal
      </Modal>
    );

    expect(screen.getByText('Modal')).toBeInTheDocument();
  });
});
