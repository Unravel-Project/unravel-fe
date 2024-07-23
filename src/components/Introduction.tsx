import Image from "next/image";

const Introduction: React.FC = () => {
    return (
        <div
            className="flex min-h-screen flex-col items-center justify-center w-full"
            style={{ 
                background: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/276c6298-0f0e-495a-8dc4-46ab50e5e8ea/d7mnd9e-c2e19ed9-5b85-4898-99db-89955d3f9540.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3NmM2Mjk4LTBmMGUtNDk1YS04ZGM0LTQ2YWI1MGU1ZThlYVwvZDdtbmQ5ZS1jMmUxOWVkOS01Yjg1LTQ4OTgtOTlkYi04OTk1NWQzZjk1NDAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8_zyijhbEW4t7Ea4mb-Wwh3Hlu8qb2je5yxAa91PpcQ')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <Image
                src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
                alt="Next.js Logo"
                width={180}
                height={180}
                priority
            />
        </div>
    )
}

export default Introduction;
