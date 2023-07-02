import axiosClient from "@/config/api-client"
import { TFilterCharacters, BaseResponseCharacters } from "../types/index"

export const fetchCharacters = async ({
  page,
  name,
  status,
  species,
  type,
  gender,
}: TFilterCharacters = {}): Promise<BaseResponseCharacters> => {
  const params: TFilterCharacters = {}
  if (!!name) params.name = name
  if (!!status) params.status = status
  const response = await axiosClient.get("/character", {
    params: params,
  })
  return response.data
}
