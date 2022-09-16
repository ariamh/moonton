import Label from '@/Components/InputLabel'
import Input from '@/Components/TextInput'
import Button from '@/Components/PrimaryButton'
import { Link, Head } from '@inertiajs/inertia-react'

export default function Register() {
    return (
        <>
            <Head
                title='Sign Up'
            />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png" className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    {/* <label className="text-base block mb-2">Full Name</label> */}
                                    {/* <input type="text" name="fullname" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" placeholder="Your fullname..." defaultValue="Angga React" /> */}
                                    <Label
                                        forInput='fullname'
                                        value='Fullname'
                                    />
                                    <Input
                                        type='text'
                                        name='fullname'
                                        placeholder='Fullname'
                                        defaultValue='Keil Ibra'
                                    />
                                </div>
                                <div>
                                    {/* <label className="text-base block mb-2">Email Address</label> */}
                                    {/* <input type="email" name="email" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" placeholder="Your Email Address" defaultValue="anggaforreact@fb.com" /> */}
                                    <Label
                                        forInput='email'
                                        value='Email Address'
                                    />
                                    <Input
                                        type='email'
                                        name='email'
                                        placeholder='Email Address'
                                        defaultValue='keil@moonton.film'
                                    />
                                </div>
                                <div>
                                    {/* <label className="text-base block mb-2">Password</label> */}
                                    {/* <input type="password" name="password" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" placeholder="Your Password" defaultValue="eeeeeeeeeeeeeee" /> */}
                                    <Label
                                        forInput='password'
                                        value='Password'
                                    />
                                    <Input
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        defaultValue='password'
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* <a href="/" className="rounded-2xl bg-alerange py-[13px] text-center">
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </a>
                                <a href="sign_in.html" className="rounded-2xl border border-white py-[13px] text-center">
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                </a> */}
                                <Button>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Link href={route('prototype.login')}>
                                    <Button
                                        variant='light-outline'
                                    >
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}