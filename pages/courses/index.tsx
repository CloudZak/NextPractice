import Link from 'next/link';
import { useRouter } from 'next/router';

export const CoursesPage = () => {
    return (
        <Link href={`/courses`}>
            <div>
                Курсы
            </div>
        </Link>
    )
}