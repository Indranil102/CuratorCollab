import React from 'react';

function App() {
  return (
    <div className="bg-surface text-on-surface">
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl flex justify-between items-center px-10 py-4 shadow-sm dark:shadow-none ease-in-out duration-300">
            <div className="text-2xl font-bold italic text-stone-900 dark:text-stone-50 newsreader">CuratorCollab</div>
            <div className="hidden md:flex gap-8 items-center">
                <a className="font-serif text-lg tracking-tight newsreader text-stone-900 dark:text-white border-b-2 border-stone-800 dark:border-stone-100 pb-1" href="#">Discover</a>
                <a className="font-serif text-lg tracking-tight newsreader text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors duration-300" href="#">Campaigns</a>
                <a className="font-serif text-lg tracking-tight newsreader text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors duration-300" href="#">Messages</a>
                <a className="font-serif text-lg tracking-tight newsreader text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors duration-300" href="#">Analytics</a>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex gap-4">
                    <button className="material-symbols-outlined p-2 hover:bg-stone-100/50 dark:hover:bg-stone-800/50 rounded-full transition-all text-stone-800 dark:text-stone-100">notifications</button>
                    <button className="material-symbols-outlined p-2 hover:bg-stone-100/50 dark:hover:bg-stone-800/50 rounded-full transition-all text-stone-800 dark:text-stone-100">settings</button>
                </div>
                <button className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-medium manrope text-sm hover:scale-[1.02] active:scale-95 transition-all">Create Brief</button>
            </div>
        </nav>

        <main className="relative pt-32 pb-20 px-6 md:px-10 overflow-hidden min-h-screen flex flex-col justify-center bg-gradient-to-b from-surface via-surface-container-low to-surface-container">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="z-10">
                    <span className="manrope text-xs uppercase tracking-widest text-secondary mb-4 block font-semibold">The Digital Curator Elite</span>
                    <h1 className="newsreader text-6xl md:text-8xl font-bold tracking-tight text-on-surface leading-[0.9] mb-8">
                        Where Serious <br/> <span className="italic text-primary">Creators</span> Meet <br/> Serious Brands
                    </h1>
                    <p className="manrope text-lg text-on-surface-variant max-w-md mb-12 leading-relaxed">
                        A refined ecosystem for high-fidelity collaborations. We prioritize artistic integrity over metrics, connecting visionaries with heritage brands.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-inverse-surface text-surface px-10 py-5 rounded-full font-bold manrope text-sm shadow-[0_0_30px_-5px_rgba(113,98,85,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
                            Join as Creator
                        </button>
                        <button className="border border-outline/20 text-on-surface px-10 py-5 rounded-full font-bold manrope text-sm hover:bg-surface-container-lowest transition-all">
                            Join as Brand
                        </button>
                    </div>
                </div>

                <div className="relative h-[600px] hidden lg:block">
                    <div className="absolute top-0 right-10 w-64 h-80 rounded-xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
                        <img className="w-full h-full object-cover" data-alt="minimalist portrait of a creative woman in a white linen shirt against a soft beige architectural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsjVKeGBZfbskpoZmPdvzDpAuwfHwDNi25aRm1zzCZ0o_L3CetFsaUKFRbtmaejn1DtxqZZwuW9c8-R5mp54G3Bi8rzOIEJiMjac1Xi26pb7BpN65XwZ0JqOVDAu_LYL-6REYFUe4OVVC0yjCozVsDy2Eu_p56GOSZ2VbbloiZw1qoR_GfJD0Zc4dF6dnGKt8Lg9bcdMHQbNiZgvJz9B9cUF0pyesHEoZqX07n09fL3bLAAqevWxpR3GZt9fS541ohAbdRlQhMJ_Wa" alt="Elena V."/>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md">
                            <p className="newsreader font-bold text-lg">Elena V. High-Fashion</p>
                            <p className="manrope text-xs text-on-surface-variant">@elenavision</p>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-0 w-64 h-80 rounded-xl overflow-hidden shadow-xl -rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
                        <img className="w-full h-full object-cover" data-alt="artistic shot of a male creator in a minimalist studio setting with soft natural light and shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAQ5AotTL1VpIlKoPF-RhRANyKGZ_WHe6hPPYwWZ8ukY_yf0OBD97I7DiNFAhdue4fTlCxE-wECD6UlHdQND7AyHLBf3ZGriliMM4HcfmqM80WCd-TBbSUp-3_GB7gOXHsvJCxzgFgaPQ1yy9hCiTOTCCeZYglMk-qCmvAwfmzzshxsIuPv3MdzjviukweNNgzxONx7wtg8VejgBhBVnpXG50sxUpnyScZOdvXj0prA93F2kfewdFlCqI8nJBAIXLdOXhbx07Ygkgc" alt="Julian S."/>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md">
                            <p className="newsreader font-bold text-lg">Julian S. Industrial Design</p>
                            <p className="manrope text-xs text-on-surface-variant">@j_studio</p>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/4 w-48 h-64 rounded-xl overflow-hidden shadow-lg translate-y-[-50%] rotate-12 z-0 opacity-50">
                        <img className="w-full h-full object-cover" data-alt="lifestyle photography of a digital creator working with high-end cameras in a bright airy studio space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVuGv-vsJTKZxP-hChEs-5qGBEtwpCxvjb73HX41PNZ-NBPeY9HG3vzmu48B1IVq1Bsyqb0cFjXPwfdI8UXIc6aS3V66Pz8J5eN0o_bNez8Y_LIoSaLtqR75_WLaQsks2G82A_9x18Fw7PaOlsCaylqY6dMG7-n73fIxfP0-wp4i9UR0d2QybviTVzX5cHO1qYE9Djt38LCXurMNKrBcnb4fp-ickRWhTgQZFy-cysnhjYB0-s8OF8pgSlbfvjINK7MOF6pL7GwwWH" alt="Studio setup"/>
                    </div>
                </div>
            </div>

            <div className="mt-20 border-t border-outline/10 pt-10">
                <p className="manrope text-[10px] uppercase tracking-[0.3em] text-center text-outline mb-8">Trusted by heritage Houses</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale contrast-125">
                    <span className="newsreader text-2xl font-bold tracking-tighter">LUMINA</span>
                    <span className="manrope text-xl font-black tracking-[0.2em]">ETHEREAL</span>
                    <span className="newsreader text-3xl italic font-serif">Archaic</span>
                    <span className="manrope text-lg font-bold border-x px-4 border-on-surface">VELVET</span>
                    <span className="newsreader text-2xl font-light">MAISON</span>
                </div>
            </div>
        </main>

        <section className="py-24 bg-surface-container-low px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <p className="newsreader text-5xl font-bold text-secondary mb-2">12k+</p>
                        <p className="manrope text-xs uppercase tracking-widest text-outline">Verified Creators</p>
                    </div>
                    <div className="text-center">
                        <p className="newsreader text-5xl font-bold text-secondary mb-2">$42M</p>
                        <p className="manrope text-xs uppercase tracking-widest text-outline">Creator Earnings</p>
                    </div>
                    <div className="text-center">
                        <p className="newsreader text-5xl font-bold text-secondary mb-2">450</p>
                        <p className="manrope text-xs uppercase tracking-widest text-outline">Global Brands</p>
                    </div>
                    <div className="text-center">
                        <p className="newsreader text-5xl font-bold text-secondary mb-2">98%</p>
                        <p className="manrope text-xs uppercase tracking-widest text-outline">Renewal Rate</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-32 bg-surface px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="newsreader text-5xl font-bold mb-4">The Curated Process</h2>
                    <div className="h-1 w-20 bg-secondary rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
                    <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-outline-variant/30 z-0"></div>
                    <div className="relative z-10 pr-12 pb-16">
                        <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center mb-8 border border-surface shadow-sm">
                            <span className="material-symbols-outlined text-secondary text-3xl">fingerprint</span>
                        </div>
                        <h3 className="newsreader text-2xl font-bold mb-4">Identity Verification</h3>
                        <p className="manrope text-on-surface-variant leading-relaxed">Every member undergoes a manual vetting process to ensure aesthetic alignment and professional reliability.</p>
                    </div>
                    <div className="relative z-10 pr-12 pb-16">
                        <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center mb-8 border border-surface shadow-sm">
                            <span className="material-symbols-outlined text-secondary text-3xl">handshake</span>
                        </div>
                        <h3 className="newsreader text-2xl font-bold mb-4">Smart Matchmaking</h3>
                        <p className="manrope text-on-surface-variant leading-relaxed">Our AI suggests partners based on semantic visual alignment, not just follower counts or generic categories.</p>
                    </div>
                    <div className="relative z-10 pr-12 pb-16">
                        <div className="w-20 h-20 rounded-full bg-inverse-surface flex items-center justify-center mb-8 border border-surface shadow-md">
                            <span className="material-symbols-outlined text-surface text-3xl">auto_awesome</span>
                        </div>
                        <h3 className="newsreader text-2xl font-bold mb-4">Creative Freedom</h3>
                        <p className="manrope text-on-surface-variant leading-relaxed">Streamlined legal and financial frameworks allow you to focus purely on the execution of your artistic vision.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-32 bg-surface-container px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="manrope text-xs uppercase tracking-widest text-secondary font-semibold">Tastemakers</span>
                        <h2 className="newsreader text-5xl font-bold mt-2">Featured Creators</h2>
                    </div>
                    <button className="manrope text-sm font-bold underline underline-offset-8 hover:text-primary transition-all">View All Creators</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPu9XFLM2jdxzrqmQGJj7UqzZwpN96rjcygoxKU2_tpBM_QgHpSe06OrxL3n8y99S1GVmsyQaf0blzAepHGjGqUEbgJaf69cD9cQxehi5YGs84680jG9CClBQsH4jojch1mkoPVdgJjUGSYrUcXR7XwijgECJDYPGSTxllqzIoTfh5tD9ExPwWWq3F0RfAWZIZTMEnIm4CGggCUn_8NHsictEt0TGWvm_EuaGvbpc8S1rSXrd7Q2JdK8yIFBik8ghQ53TCoHKtLvuh" alt="Sophia Chen"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="manrope text-xs uppercase tracking-widest mb-2">Editorial Lead</p>
                            <h3 className="newsreader text-3xl font-bold">Sophia Chen</h3>
                        </div>
                    </div>
                    <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-xl">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDuEHY3bT8yCvvxY4WQDLL2yyQPvZjOTp3sJr3J_s32oEnrDbJC9WDdp687hlHFf5CsrKyaKc9Cub9OGesViY9cdxd9Y7rQ67XtbusZfsilLL-sIDoszctYsK8RfuAe_-SPbZAPSUxdBpmBdYwhOd6XZHd6f1FGMmF22gZ7vFGf9Pfc8hvCnpKvf_a85CnSf6z2sS4705-yEIa-e_of-r7HOJqW9RBK08rwfyqX6srPf3ftRPokbdGlnMoVk6QTUHCZvi0WSkPcQtZ" alt="Marcus Thorne"/>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="newsreader text-2xl font-bold">Marcus Thorne</h3>
                        </div>
                    </div>
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRilH4nTlgtNimfGrgSbqlLJ77Hn4GLnWoe9QkEB3dC_PmxA64_8qz07Bx83PwCDCEKyb7l3HebCsGMvdNyYfEmriSsvS-wqXW2vybOmF1LGXRBE5Vk8mBlIDyo3E2Il3k7CDJ0BwhvLKInEJDxJfNe12r3ChS44ilOm-yRsUe9I6MV0xSYwt1JUwPrBMS4Z2tf2T2XBBoDmdmC5wsrnkanlRSIb64-ZbszN7OwoxEp4YCQPaMYYUpKDq-N2jv-SpjkFNuNHqdyd7D" alt="Lia Meyer"/>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="newsreader text-xl font-bold">Lia Meyer</h3>
                        </div>
                    </div>
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdWgVYocTUVOodUxTyelYv9MDvZBhLMvBCHxN9EA4fW0BKV5AyxqwOZhh0DnLCDgwqfN38ftlhPbU-plbmSWoUrwGuf-rH0cet8LrNx1wEdLAZ2GpXchdANkC_cZSj3FIDMiliLcXDQ0HO-qOHnEGuAlNV40txoccISWsFrK2t34p0wHicasdYDvsQlQO82gR64QBD4UQGon8pEOsIIppU3-kXBtUjQC5dJB3Z55HPj_ULBExrURkIRzVuumWYy3olqohcCpFRWCRR" alt="David Roe"/>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="newsreader text-xl font-bold">David Roe</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-32 bg-surface px-6 md:px-10">
            <div className="max-w-4xl mx-auto text-center">
                <span className="material-symbols-outlined text-secondary/30 text-6xl mb-8" style={{fontVariationSettings: "'FILL' 1"}}>format_quote</span>
                <blockquote className="newsreader text-3xl md:text-5xl font-medium leading-tight mb-12 italic text-on-surface">
                    "CuratorCollab isn't just another platform; it's a sanctuary for those of us who care about the narrative as much as the product. It transformed how I approach brand partnerships."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" data-alt="profile photo of a creative professional woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPpj0kURv7jmqT2Uc54C8I3F_7cgXTSMprRNkOMEmyWxSqfuHBKiJ4wgXY2czwqAjyzrBdB5etLZ1Kf-D86Cbd9aTv8UTVDAAcymQZkf7KQb5EixC-MflelNrzBrBqlMlNF49lwP2EF0AeSQ72y4N2bN4-dGF_ILtgOf8t5KNEF3chvcrzXHRcy9L3O3FcmCM4DzcKpxHw0wONOuCun2E4PYcMWjshUr8L7ZV88bTIkVfp0u-79vBL4HLf2FbNoHmQ9Yx0tMhPQe0n" alt="Amara Okafor"/>
                    </div>
                    <div className="text-left">
                        <p className="manrope font-bold text-sm">Amara Okafor</p>
                        <p className="manrope text-xs text-outline">Creative Director, Studio Bloom</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-32 bg-surface-container-low px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="newsreader text-5xl font-bold">Active Briefs</h2>
                    <p className="manrope text-on-surface-variant mt-4">Exclusive opportunities for top-tier creators.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-surface rounded-xl p-2 shadow-sm hover:shadow-xl transition-shadow duration-500 group">
                        <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 relative">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Sl7dIJoaoaKG2UahO89h1Y-AnQvrfxfOYUlcjsYhC4wD9bchUvK7aQdXPDZAdty1W-xLULY-7Zmz2WMEDR45UEac330aMbQBx6gIs-tRXpbJFrCWWacdPuXXz71wuaKezV3uUZz7338NMjLl_qXgIs3lUNLiF2Xxd_35-06ikDKS-wP0_nx2lkAuRfw2oN1i-0pWTENpEVyzd5MfA3A8hOXgEPEhfS-O4KtMUWAraja8U3iB4qE2CewHEi1hOxMFAdVESAqOP5gK" alt="The Minimalist Monolith"/>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] manrope font-bold uppercase tracking-widest">Architecture</div>
                        </div>
                        <div className="px-6 pb-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="newsreader text-2xl font-bold">The Minimalist Monolith</h3>
                                <span className="manrope font-bold text-secondary">$15,000+</span>
                            </div>
                            <p className="manrope text-sm text-on-surface-variant mb-6 line-clamp-2">A leading design house seeking 5 creators to document the interplay of light and shadow in their latest residential project.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-200"></div>
                                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-300"></div>
                                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-400"></div>
                                    <div className="ml-4 manrope text-xs text-outline self-center">+12 applicants</div>
                                </div>
                                <button className="manrope text-xs font-bold text-secondary group-hover:underline">View Brief</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface rounded-xl p-2 shadow-sm hover:shadow-xl transition-shadow duration-500 group">
                        <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 relative">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAITN3BxJ1aIfz0ecmCLk5Gdrg1ypwCHJ5sHwhtiXL3Y8sYvbuzict6LhJRlpE2FcpseikLzKdfNpsXyFAI21EUwjYArOv8mZ7Q9afeL6WN_HR36dQoMC9AbRVm-A4Z96fwpSC2QvK37B324iAGELKbK-ACx5RlJYLUQXjfRCIIQME8J0i6c7hAuukVuNEE_XC9K9zccR_OTskvjhp_Grjm9BI5QJl3XW_9r_gcYqPgR_HwUQHh0jMfVYk_qy_SxQVg9NqPPsYNyT7h" alt="Essential Purity Series"/>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] manrope font-bold uppercase tracking-widest">Beauty</div>
                        </div>
                        <div className="px-6 pb-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="newsreader text-2xl font-bold">Essential Purity Series</h3>
                                <span className="manrope font-bold text-secondary">$8,500+</span>
                            </div>
                            <p className="manrope text-sm text-on-surface-variant mb-6 line-clamp-2">Partnering with skin-conscious creators to redefine beauty standards through raw, unfiltered macro-photography.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-200"></div>
                                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-slate-300"></div>
                                    <div className="ml-4 manrope text-xs text-outline self-center">+8 applicants</div>
                                </div>
                                <button className="manrope text-xs font-bold text-secondary group-hover:underline">View Brief</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="w-full py-12 px-10 mt-auto bg-[#fdf9f4] dark:bg-stone-950 flex flex-col md:flex-row justify-between items-center border-t border-stone-200 dark:border-stone-800 pt-8">
            <div className="mb-8 md:mb-0">
                <p className="font-sans text-xs uppercase tracking-widest manrope text-stone-500 dark:text-stone-400">© 2024 The Digital Curator. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
                <a className="font-sans text-xs uppercase tracking-widest manrope text-stone-400 dark:text-stone-600 hover:underline decoration-stone-300 underline-offset-4 transition-all hover:text-stone-900 dark:hover:text-stone-100" href="#">Privacy Policy</a>
                <a className="font-sans text-xs uppercase tracking-widest manrope text-stone-400 dark:text-stone-600 hover:underline decoration-stone-300 underline-offset-4 transition-all hover:text-stone-900 dark:hover:text-stone-100" href="#">Terms of Service</a>
                <a className="font-sans text-xs uppercase tracking-widest manrope text-stone-400 dark:text-stone-600 hover:underline decoration-stone-300 underline-offset-4 transition-all hover:text-stone-900 dark:hover:text-stone-100" href="#">Journal</a>
                <a className="font-sans text-xs uppercase tracking-widest manrope text-stone-400 dark:text-stone-600 hover:underline decoration-stone-300 underline-offset-4 transition-all hover:text-stone-900 dark:hover:text-stone-100" href="#">Contact</a>
            </div>
        </footer>
    </div>
  );
}

export default App;
