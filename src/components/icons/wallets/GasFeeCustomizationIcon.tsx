/* eslint-disable react/jsx-key */
import * as React from "react"
import { createIcon } from "@chakra-ui/react"

import { commonIconDefaultProps } from "../utils"

export const GasFeeCustomizationIcon = createIcon({
  displayName: "GasFeeCustomizationIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: [
    <path d="M106.665 60C106.665 56.5013 109.501 53.665 113 53.665H169C172.499 53.665 175.335 56.5013 175.335 60V99C175.335 102.499 172.499 105.335 169 105.335H113C109.501 105.335 106.665 102.499 106.665 99V60ZM117.335 64.335V94.665H164.665V64.335H117.335Z" />,
    <path d="M92.0001 32.665C88.5013 32.665 85.6651 35.5013 85.6651 39V192.665H80.0001C76.5014 192.665 73.6651 195.501 73.6651 199V217C73.6651 220.499 76.5014 223.335 80.0001 223.335H203C206.499 223.335 209.335 220.499 209.335 217V199C209.335 195.501 206.499 192.665 203 192.665H197.335V176.622C198.369 177.219 199.608 177.474 200.877 177.262L201.054 177.233C205.054 176.567 213.221 175.208 220.243 170.332C227.807 165.08 233.515 156.146 232.829 141.746C231.73 118.67 222.158 104.759 215.505 95.4088L221.46 91.439C222.781 90.5581 223.641 89.1344 223.806 87.5549C223.971 85.9754 223.424 84.4045 222.314 83.2693L199.814 60.2693C199.108 59.5474 198.247 59.0685 197.335 58.8339V39C197.335 35.5013 194.499 32.665 191 32.665H92.0001ZM186.665 192.665V43.335H96.3351V192.665H186.665ZM197.335 72.9937V167.377C197.873 167.067 198.475 166.846 199.123 166.738C203.191 166.06 209.235 164.986 214.157 161.568C218.643 158.453 222.685 153.054 222.171 142.254C221.204 121.94 213.001 110.358 206.432 101.081C205.431 99.6674 204.467 98.3065 203.573 96.977C202.781 95.7998 202.491 94.3558 202.767 92.9642C203.042 91.5726 203.861 90.348 205.041 89.5611L210.186 86.1307L197.335 72.9937Z" />,
    <path d="M49.335 67.2276C47.2515 65.1441 43.8736 65.1441 41.7901 67.2276L23.2276 85.7901C21.1442 87.8735 21.1442 91.2515 23.2276 93.3349C25.3111 95.4184 28.689 95.4184 30.7725 93.3349L40.2275 83.8798V110.875C40.2275 113.821 42.6161 116.21 45.5625 116.21C48.509 116.21 50.8975 113.821 50.8975 110.875V83.8798L60.3526 93.3349C62.4361 95.4184 65.814 95.4184 67.8975 93.3349C69.9809 91.2515 69.9809 87.8735 67.8975 85.7901L49.335 67.2276Z" />,
    <path d="M40.2275 146.125V173.12L30.7725 163.665C28.689 161.582 25.3111 161.582 23.2276 163.665C21.1442 165.749 21.1442 169.126 23.2276 171.21L41.7901 189.772C43.8736 191.856 47.2515 191.856 49.335 189.772L67.8975 171.21C69.9809 169.126 69.9809 165.749 67.8975 163.665C65.814 161.582 62.4361 161.582 60.3526 163.665L50.8975 173.12V146.125C50.8975 143.179 48.509 140.79 45.5625 140.79C42.6161 140.79 40.2275 143.179 40.2275 146.125Z" />,
  ],
})
