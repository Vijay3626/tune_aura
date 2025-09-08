import { registerShowToast } from '@/app/constants';
import { Alert } from 'flowbite-react';
import React, { useEffect } from 'react';

function ReusableToaster() {
  const [alert, setAlert] = React.useState({ message: '', type: '' });
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert({ message: '', type: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);
  useEffect(() => {
    registerShowToast(setAlert);
  }, []);
  return (
    <div className="">
      {alert.message && (
        <div className="fixed top-10 right-10  md:w-1/4 z-[100]">
          <Alert
            color={alert.type}
            onDismiss={() => setAlert({ message: '', type: '' })}
            className="rounded-md z-[100] relative"
          >
            <span className="font-medium">{alert.message}</span>
          </Alert>
        </div>
      )}
    </div>
  );
}

export default ReusableToaster;
