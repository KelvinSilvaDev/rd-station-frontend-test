'use client'

import { createContext, useContext, useEffect, useState } from 'react';


type FormDataContextType = {
  formData: Record<string, any>;
  setFormData: (data: Record<string, any>) => void;
};

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);
FormDataContext.displayName = 'FormDataContext';

export function useFormData() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData deve ser usado dentro de um FormDataProvider');
  }

  return context;

}

export function FormDataProvider({ children }:React.FormHTMLAttributes<HTMLFormElement>) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    setFormData({
      children
    })
  }, [children]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}
