// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, orderBy } from "firebase/firestore";
import { useAuth } from '../context/AuthContext';

interface Customer {
  id: string;
  name: string;
  phone: string;
  birthdate: string;
  income: number;
  status: boolean;
}

export const Dashboard: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [newCustomer, setNewCustomer] = useState<Partial<Customer>>({ status: false });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, logout } = useAuth();

  const fetchCustomers = async () => {
    const q = query(collection(db, "customers"), orderBy("name"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Customer));
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleAddCustomer = async () => {
    await addDoc(collection(db, "customers"), newCustomer);
    fetchCustomers();
  };

  const handleUpdateCustomer = async (id: string, updatedData: Partial<Customer>) => {
    const customerDoc = doc(db, "customers", id);
    await updateDoc(customerDoc, updatedData);
    fetchCustomers();
  };

  const handleDeleteCustomer = async (id: string) => {
    const customerDoc = doc(db, "customers", id);
    await deleteDoc(customerDoc);
    fetchCustomers();
  };

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Customer Dashboard</h1>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>Add Customer</h3>
            <input type="text" placeholder="Name" onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })} />
            <input type="number" placeholder="Phone" onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })} />
            <input type="date" placeholder="Birthdate" onChange={(e) => setNewCustomer({ ...newCustomer, birthdate: e.target.value })} />
            <input type="number" placeholder="Income" onChange={(e) => setNewCustomer({ ...newCustomer, income: Number(e.target.value) })} />
            <input type="checkbox" onChange={(e) => setNewCustomer({ ...newCustomer, status: e.target.checked })} /> Active
            <button className="btn btn-primary" onClick={handleAddCustomer}>Add</button>
          </div>
          <div className="col-6">
            <h3>Customer List</h3>
            <ul className="list-group">
              {customers.map(customer => (
                <li key={customer.id} className="list-group-item">
                  {customer.name} - {customer.phone} - {customer.birthdate} - {customer.income} - {customer.status ? "Active" : "Inactive"}
                  <button className="btn btn-warning" onClick={() => handleUpdateCustomer(customer.id, { status: !customer.status })}>
                    {customer.status ? "Deactivate" : "Activate"}
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
