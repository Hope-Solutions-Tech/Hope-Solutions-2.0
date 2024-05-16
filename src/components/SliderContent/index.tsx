import { ReactNode, useEffect, useRef, useState } from 'react';
import './styles.css'

interface SliderContentProps {
    title: string;
    children: ReactNode;
}

const SliderContent = ({ title, children }: SliderContentProps) => {
    const [visible, setVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const screenHeight = window.innerHeight;

                if (top < screenHeight /2) {
                    setVisible(true)
                } else {
                    setVisible(false)
                }
        }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

    }, []);


    return (
    <div className={`sliderDiv ${visible ? 'visible' : ''}`} ref={ref}>
        <h1>{title}</h1>
        <p>{children}</p>
    </div>
    )
    
}

export default SliderContent;
