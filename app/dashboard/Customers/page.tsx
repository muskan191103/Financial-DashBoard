import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default function CustomersPage() {
  return (
    <div>
      <h1>Customers Page</h1>
      <p>This is the Customers page.</p>
    </div>
  );
}