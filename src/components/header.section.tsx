"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { LuX, LuMenu } from "react-icons/lu";

import { Container } from "./ui/Container/Container";
import ColorModeButton from "./color-mode-button";
import { IconButton } from "./ui/Button/ButtonIcon";
import Logo from "./Logo";
import { cn } from "@/utils/cn";

import { appLinks, socialMediaLinks } from "@/app.config";
import Heading from "./ui/Heading/Heading";

const MenuButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton
      className="md:hidden"
      type="button"
      onClick={onClick}
      aria-label="Menu"
      variant="ghost"
      data-testid="menu-button"
    >
      <LuMenu />
    </IconButton>
  );
};

const MobileNav = ({ isOpen, onClose}: { isOpen: boolean; onClose: () => void; }) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 md:hidden bg-black/10 backdrop-blur-xs z-20"
          onClick={onClose}
          data-testid="mobile-nav-overlay"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed top-0 bottom-0 right-0 w-80 bg-white dark:bg-neutral-800 max-w-[80vw] z-50 md:hidden"
            role="navigation"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
            data-testid="mobile-nav"
          >
            <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
              <Heading as={"h4"} >Menú</Heading>
              <IconButton onClick={onClose} aria-label="Cerrar menú" variant="ghost">
                <LuX />
              </IconButton>
            </div>
            <div className="p-4">
              <nav role="navigation" className="flex flex-col gap-4" aria-label="Mobile main navigation">
                {appLinks.links.map((link, index) => (
                  <Link
                    key={link.title + index}
                    href={`/${link.url}`}
                    className={cn(
                      "font-primary dark:text-neutral-300 text-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-50 transition-colors duration-200",
                      pathname.split("/")[1] == link.url ? "dark:text-neutral-50 text-neutral-800" : undefined
                    )}
                    data-testid={`nav-link-${link.title.toLowerCase()}`}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="p-4 border-t border-neutral-200 dark:border-neutral-700 mt-auto">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Tema</span>
                <ColorModeButton />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DesktopNav = ({ className = "" }: { className?: string }) => {
  const pathname = usePathname();
    
  return (
    <nav
      className={cn("hidden md:flex md:items-center md:justify-center md:gap-8", className)}
      role="navigation"
      aria-label="Main navigation"
      data-testid="desktop-nav"
    >
      <div className="flex items-center gap-4">
        {appLinks.links.map((link, index) => (
          <Link
            key={link.title + index}
            href={`/${link.url}`}
            className={cn(
              "text-neutral-900 font-primary dark:text-neutral-100 p-2 hover:underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200",
              pathname.split("/")[1] == link.url ? "underline" : undefined
            )}
            style={{
              textUnderlineOffset: "4px",
              textDecorationThickness: "2px",
            }}
            data-testid={`nav-link-${link.title.toLowerCase()}`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export const SocialMediaLinks = () => {
  return (
    <>
      <div className="flex items-center">
        {socialMediaLinks.links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`social-link-${link.title.toLowerCase()}`}
          >
            <IconButton aria-label="" variant="ghost">
              <link.icon />
            </IconButton>
          </a>
        ))}
      </div>
    </>
  );
};
export const HeaderSection = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenuClick = () => {
    setIsOpenMenu((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-20 border-b border-neutral-500/10  dark:border-neutral-50/10 md:px-6 lg:px-8`}
        data-testid="header-section"
      >
        <Container maxW="container.xl" className="flex items-center justify-between h-14">
          <Logo />
          <div className="flex justify-end items-center gap-2">
            <DesktopNav className="mr-8" />
            <SocialMediaLinks />
            <ColorModeButton className="hidden md:block" />
            <MenuButton onClick={handleMenuClick} />
          </div>
        </Container>
      </header>
      <MobileNav isOpen={isOpenMenu} onClose={handleCloseMenu} />
      <div className="h-14" aria-hidden="true" />
    </>
  );
};
