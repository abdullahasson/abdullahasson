"use client"; // Mark the component as a Client Component

import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react"; // Import ChangeEvent for type safety

const ChangeLng = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Define the type for the event parameter
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value; // No need to cast as string, it's already a string
    const path = pathname.split("/").slice(2).join("/"); // Remove the locale part of the path
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 cursor-pointer"
    >
      <option
        value="en"
        className="text-gray-700 bg-white hover:bg-gray-100"
      >
        English
      </option>
      <option
        value="ar"
        className="text-gray-700 bg-white hover:bg-gray-100"
      >
        العربية
      </option>
    </select>
  );
};

export default ChangeLng;