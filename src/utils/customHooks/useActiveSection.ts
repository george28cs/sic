import { useState } from 'react';
import { SectionEnum } from '../enum/sectionEnum';

const useActiveSection = (): [string, (sectionName: SectionEnum) => void] => {
  const [activeSection, setActiveSection] = useState(SectionEnum.HOME);

  const handleSetActiveSection = (sectionName: SectionEnum) => {
    setActiveSection(sectionName);
  };

  return [activeSection, handleSetActiveSection];
};

export default useActiveSection;
