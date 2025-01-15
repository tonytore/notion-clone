import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'
import NewDocumentBtn from './NewDocumentBtn'
  
const SideBar = () => {
  const menuOption = (
    <>
    <NewDocumentBtn/>
    </>
  )
  return (
    <div className='min-h-screen p-3 border bg-slate-50'>
    <div className='md:hidden'>
    <Sheet>
  <SheetTrigger><AlignJustify /></SheetTrigger>
  <SheetContent side={'left'}>
    <SheetHeader>
      <SheetTitle>menu</SheetTitle>
      <SheetDescription>
       {menuOption}
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </div>
    <div className='hidden md:inline'>
      {menuOption}
    </div>
    </div>
  )
}

export default SideBar
