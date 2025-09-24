import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
// constants
import { dockData } from '@/constants/components';
// Icons
import { Languages } from 'lucide-react';

export default function CustomDock() {
    return (
        <div>
            <div className='fixed bottom-10 left-1/2 max-w-full -translate-x-1/2'>
                <Dock className='items-end rotate-90 pb-5 bg-neutral-500/10 backdrop-'>
                    {dockData.map((item, idx) => (
                        <a href={item.href} key={idx}>
                            <DockItem className='aspect-square rounded-full bg-neutral-800'>
                                <DockLabel className="bg-gray-950 border-none text-white text-xl">{item.title}</DockLabel>
                                <DockIcon>{item.icon}</DockIcon>
                            </DockItem>
                        </a>
                    ))}

                    <DockItem className='aspect-square rounded-full bg-neutral-800'>
                        <DockIcon><Languages /></DockIcon>
                    </DockItem>
                </Dock>
            </div>
        </div>
    )
}