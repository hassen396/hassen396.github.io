import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center">Contact Me</h2>
      <Form className="mt-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Your message" />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
    </Container>
  );
}
