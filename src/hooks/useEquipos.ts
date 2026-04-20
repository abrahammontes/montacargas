import { useState, useEffect } from 'react';

export interface Equipo {
  id: number;
  nombre: string;
  tipo: 'Eléctrico' | 'Combustión' | 'Pasillo Angosto' | 'Reach';
  capacidad: string;
  altura: string;
  combustible: string;
  precio: string;
  badge: 'Nuevo' | 'Renta' | 'Usado';
  imagen: string;
}

const EQUIPOS_DEFAULT: Equipo[] = [
  {
    id: 1,
    nombre: 'Germont E25',
    tipo: 'Eléctrico',
    capacidad: '2,500 kg',
    altura: '4.5 m',
    combustible: 'Eléctrico 48V',
    precio: 'Desde $450,000',
    badge: 'Nuevo',
    imagen: '/images/logo.png'
  },
  {
    id: 2,
    nombre: 'Germont E30',
    tipo: 'Eléctrico',
    capacidad: '3,000 kg',
    altura: '4.5 m',
    combustible: 'Eléctrico 48V',
    precio: 'Desde $520,000',
    badge: 'Nuevo',
    imagen: '/images/Nissan2.jpg'
  },
  {
    id: 3,
    nombre: 'Germont C30',
    tipo: 'Combustión',
    capacidad: '3,000 kg',
    altura: '4.5 m',
    combustible: 'Gas LP',
    precio: 'Desde $380,000',
    badge: 'Nuevo',
    imagen: '/images/Nissan3.jpg'
  },
  {
    id: 4,
    nombre: 'Germont R20',
    tipo: 'Pasillo Angosto',
    capacidad: '2,000 kg',
    altura: '6.0 m',
    combustible: 'Eléctrico 36V',
    precio: 'Desde $680,000',
    badge: 'Nuevo',
    imagen: '/images/Nissan4.jpg'
  }
];

const STORAGE_KEY = 'montacargas_equipos';

export const useEquipos = () => {
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setEquipos(JSON.parse(stored));
      } catch {
        setEquipos(EQUIPOS_DEFAULT);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(EQUIPOS_DEFAULT));
      }
    } else {
      setEquipos(EQUIPOS_DEFAULT);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(EQUIPOS_DEFAULT));
    }
    setLoading(false);
  }, []);

  const saveEquipos = (newEquipos: Equipo[]) => {
    setEquipos(newEquipos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newEquipos));
  };

  const addEquipo = (equipo: Omit<Equipo, 'id'>) => {
    const newId = Math.max(...equipos.map(e => e.id), 0) + 1;
    const newEquipo = { ...equipo, id: newId };
    const updated = [...equipos, newEquipo];
    saveEquipos(updated);
    return newEquipo;
  };

  const updateEquipo = (id: number, equipo: Partial<Equipo>) => {
    const updated = equipos.map(e => e.id === id ? { ...e, ...equipo } : e);
    saveEquipos(updated);
  };

  const deleteEquipo = (id: number) => {
    const updated = equipos.filter(e => e.id !== id);
    saveEquipos(updated);
  };

  const resetEquipos = () => {
    saveEquipos(EQUIPOS_DEFAULT);
  };

  return {
    equipos,
    loading,
    addEquipo,
    updateEquipo,
    deleteEquipo,
    resetEquipos
  };
};