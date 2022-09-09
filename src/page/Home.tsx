import React, { useEffect, useState } from 'react';
import SmoothieCard from '../components/SmoothieCard';
import supabase from '../config/supabaseConfig';

export default function Home() {
  const [fetchError, setFetchError] = useState<string | null>('');
  const [smoothies, setSmoothies] = useState<Smoothie[]>([]);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from<Smoothie>('smoothies')
        .select();

      if (error) {
        setFetchError('Could not fetch the smoothies');
        setSmoothies([]);
      }
      if (data) {
        setSmoothies(data);
        setFetchError(null);
      }
    };

    fetchSmoothies();
  }, []);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      <div className="smoothies">
        <div className="smoothie-grid">
          {smoothies?.map((smoothie) => (
            <SmoothieCard smoothie={smoothie} key={smoothie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Generated by https://quicktype.io

export interface Smoothie {
  id: number;
  created_at: Date;
  title: string;
  method: string;
  rating: number;
}