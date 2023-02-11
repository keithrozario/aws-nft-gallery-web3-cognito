const links = {
    github: 'https://github.com/ethereum-boilerplate/ethereum-boilerplate/',
    forum: 'https://forum.moralis.io/',
    moralis: 'https://moralis.io/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat',
};

const Footer = () => {
    return (
        <nav className="bg-[#181e27] pb-10 pt-10 h-max">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-max">
                <a className="text-white" href="" target="_blank">
                    Github project repository
                </a>
            </div>
        </nav>
    );
};

export default Footer;
