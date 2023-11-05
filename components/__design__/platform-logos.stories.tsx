import type { Meta as MetaObj, StoryObj } from '@storybook/react';
import Image from 'next/image';

export const PlatformLogos: StoryObj = {
  render: () => (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/static/images/logos/platform-linux.svg"
          alt="Ubuntu Logo"
          width={64}
          height={64}
        />
        <Image
          src="/static/images/logos/platform-apple.svg"
          alt="Apple Logo"
          width={64}
          height={64}
        />
        <Image
          src="/static/images/logos/platform-nvm.svg"
          alt="NVM Logo"
          width={64}
          height={64}
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/static/images/logos/platform-microsoft.svg"
          alt="Microsoft Logo"
          width={64}
          height={64}
        />
        <Image
          src="/static/images/logos/platform-homebrew.svg"
          alt="Homebrew Logo"
          width={64}
          height={64}
        />
        <Image
          src="/static/images/logos/platform-placeholder.svg"
          alt="Placeholder Logo"
          width={64}
          height={64}
        />
      </div>
    </div>
  ),
};

export default { title: 'Design System' } as MetaObj;
