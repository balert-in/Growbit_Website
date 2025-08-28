import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Select = ({
  options = [],
  value = "",
  onChange = () => {},
  placeholder = "Select an option...",
  disabled = false,
  className = "",
  searchable = true,
  clearable = false,
  size = "md",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [isFocused, setIsFocused] = useState(false)

  const selectRef = useRef(null)
  const inputRef = useRef(null)
  const optionsRef = useRef([])

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()))

  const selectedOption = options.find((option) => option.value === value)

  const sizeClasses = {
    sm: "h-10 text-sm px-3",
    md: "h-12 text-base px-4",
    lg: "h-14 text-lg px-5",
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
        setSearchTerm("")
        setHighlightedIndex(-1)
        setIsFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen && searchTerm && filteredOptions.length > 0) {
      setHighlightedIndex(0)
    }
  }, [searchTerm, filteredOptions.length, isOpen])

  useEffect(() => {
    if (highlightedIndex >= 0 && optionsRef.current[highlightedIndex]) {
      optionsRef.current[highlightedIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      })
    }
  }, [highlightedIndex])

  const handleToggle = () => {
    if (disabled) return
    setIsOpen(!isOpen)
    setIsFocused(!isOpen)
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handleOptionSelect = (option) => {
    onChange(option.value)
    setIsOpen(false)
    setSearchTerm("")
    setHighlightedIndex(-1)
    setIsFocused(false)
  }

  const handleKeyDown = (e) => {
    if (disabled) return

    switch (e.key) {
      case "Enter":
        e.preventDefault()
        if (isOpen && highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          handleOptionSelect(filteredOptions[highlightedIndex])
        } else if (!isOpen) {
          setIsOpen(true)
          setIsFocused(true)
        }
        break
      case "Escape":
        setIsOpen(false)
        setSearchTerm("")
        setHighlightedIndex(-1)
        setIsFocused(false)
        break
      case "ArrowDown":
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
          setIsFocused(true)
        } else {
          setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : 0))
        }
        break
      case "ArrowUp":
        e.preventDefault()
        if (isOpen) {
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1))
        }
        break
      case "Tab":
        setIsOpen(false)
        setSearchTerm("")
        setHighlightedIndex(-1)
        setIsFocused(false)
        break
      default:
        if (!isOpen && e.key.length === 1) {
          setIsOpen(true)
          setIsFocused(true)
          setSearchTerm(e.key)
        }
        break
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value && filteredOptions.length > 0) {
      const exactMatch = filteredOptions.find((option) => option.label.toLowerCase().startsWith(value.toLowerCase()))
      if (exactMatch) {
        setHighlightedIndex(filteredOptions.indexOf(exactMatch))
      }
    }
  }

  const handleClear = (e) => {
    e.stopPropagation()
    onChange("")
    setSearchTerm("")
    setHighlightedIndex(-1)
  }

  return (
    <div ref={selectRef} className={`relative w-full ${className}`}>
      <motion.div
        className={`
          ${sizeClasses[size]}
          w-full bg-white border-2 rounded-xl cursor-pointer
          flex items-center justify-between
          transition-all duration-300 ease-in-out
          ${
            disabled
              ? "bg-gray-100 border-gray-200 cursor-not-allowed opacity-60"
              : isOpen || isFocused
                ? "border-[#9cd4af] shadow-lg shadow-[#9cd4af]/20"
                : "border-gray-200 hover:border-[#75ccc3]"
          }
        `}
        onClick={handleToggle}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        <div className="flex-1 flex items-center">
          {searchable && (isOpen || isFocused) ? (
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={selectedOption ? selectedOption.label : placeholder}
              className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400"
              disabled={disabled}
            />
          ) : (
            <span className={`truncate ${selectedOption ? "text-gray-900" : "text-gray-400"}`}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {clearable && selectedOption && !disabled && (
            <motion.button
              onClick={handleClear}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className={iconSizes[size]} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          )}

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className={`${iconSizes[size]} text-gray-400`}
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 bg-white border-2 border-[#9cd4af]/20 rounded-xl shadow-xl shadow-[#9cd4af]/10 max-h-60 overflow-auto"
          >
            {filteredOptions.length > 0 ? (
              <div className="py-2">
                {filteredOptions.map((option, index) => (
                  <motion.div
                    key={option.value}
                    ref={(el) => (optionsRef.current[index] = el)}
                    className={`
                      px-4 py-3 cursor-pointer transition-all duration-200
                      flex items-center justify-between
                      ${
                        highlightedIndex === index
                          ? "bg-gradient-to-r from-[#9cd4af]/20 to-[#75ccc3]/20 text-gray-900"
                          : "hover:bg-gradient-to-r hover:from-[#9cd4af]/10 hover:to-[#75ccc3]/10 text-gray-700"
                      }
                      ${option.value === value ? "font-semibold" : ""}
                    `}
                    onClick={() => handleOptionSelect(option)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="truncate">{option.label}</span>
                    {option.value === value && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-4 h-4 text-[#9cd4af]">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-gray-500">
                <div className="w-12 h-12 mx-auto mb-3 text-gray-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
                <p>No options found</p>
                {searchTerm && <p className="text-sm mt-1">Try searching for something else</p>}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Select;