import { useEffect, useState } from 'react';

const useAssetAvailability = (assetPath) => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let ignore = false;

    const checkAsset = async () => {
      setIsChecking(true);

      try {
        const response = await fetch(assetPath, { method: 'HEAD' });
        if (!ignore) {
          setIsAvailable(response.ok);
        }
      } catch (_error) {
        if (!ignore) {
          setIsAvailable(false);
        }
      } finally {
        if (!ignore) {
          setIsChecking(false);
        }
      }
    };

    checkAsset();

    return () => {
      ignore = true;
    };
  }, [assetPath]);

  return { isAvailable, isChecking };
};

export default useAssetAvailability;