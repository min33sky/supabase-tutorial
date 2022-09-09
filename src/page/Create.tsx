import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseConfig';

export default function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [rating, setRating] = useState(0);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !method || !rating) {
      setFormError('Please fill in all the fields correctly.');
      return;
    }

    const { data, error } = await supabase
      .from('smoothies')
      .insert([{ title, method, rating }]);

    if (error) {
      console.log(error);
      setFormError('Please fill in all the fields correctly.');
    }
    if (data) {
      console.log(data);
      setFormError(null);
      navigate('/');
    }
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value, 10))}
        />

        <button>Create Smoothie Recipe</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
