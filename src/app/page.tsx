import { redirect } from 'next/navigation';

export default function Home() {
    redirect('https://startscape.vercel.app/');

    return <div>Hello world</div>;
}
